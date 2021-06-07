import React from 'react'
import { Flex, Text, TooltipText, useTooltip } from '@lydiafinance/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import useMaximusWithdrawalFeeTimer from 'hooks/maximus/useMaximusWithdrawalFeeTimer'
import WithdrawalFeeTimer from './WithdrawalFeeTimer'

interface UnstakingFeeCountdownRowProps {
  withdrawalFee: string
  lastDepositedTime: string
  withdrawalFeePeriod?: string
}

const UnstakingFeeCountdownRow: React.FC<UnstakingFeeCountdownRowProps> = ({
  withdrawalFee,
  lastDepositedTime,
  withdrawalFeePeriod = '259200',
}) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const feeAsDecimal = parseInt(withdrawalFee) / 100 || '-'
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Text bold mb="4px">
        {t(`Unstaking fee: %fee%%`, { fee: feeAsDecimal })}
      </Text>
      <Text>
        {t(
          'Only applies within 5 days of staking. Unstaking after 5 days will not include a fee. Timer resets every time you stake new LYD in the pool.',
        )}
      </Text>
    </>,
    { placement: 'bottom-start' },
  )

  const { secondsRemaining, hasUnstakingFee } = useMaximusWithdrawalFeeTimer(
    parseInt(lastDepositedTime, 10),
    parseInt(withdrawalFeePeriod, 10),
  )

  // The user has made a deposit, but has no fee
  const noFeeToPay = lastDepositedTime && !hasUnstakingFee

  // Show the timer if a user is connected, has deposited, and has an unstaking fee
  const shouldShowTimer = account && lastDepositedTime && hasUnstakingFee

  const getRowText = () => {
    if (noFeeToPay) {
      return t('unstaking fee')
    }
    if (shouldShowTimer) {
      return t('unstaking fee until')
    }
    return t('unstaking fee if withdrawn within 168h')
  }

  return (
    <Flex alignItems="center" justifyContent="space-between">
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        {noFeeToPay ? '0' : feeAsDecimal}% {getRowText()}
      </TooltipText>
      {shouldShowTimer && <WithdrawalFeeTimer secondsRemaining={secondsRemaining} />}
    </Flex>
  )
}

export default UnstakingFeeCountdownRow
