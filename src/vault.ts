import {
  BuyUSDG as BuyUSDGEvent,
  ClosePosition as ClosePositionEvent,
  CollectMarginFees as CollectMarginFeesEvent,
  CollectSwapFees as CollectSwapFeesEvent,
  DecreaseGuaranteedUsd as DecreaseGuaranteedUsdEvent,
  DecreasePoolAmount as DecreasePoolAmountEvent,
  DecreasePosition as DecreasePositionEvent,
  DecreaseReservedAmount as DecreaseReservedAmountEvent,
  DecreaseUsdgAmount as DecreaseUsdgAmountEvent,
  DirectPoolDeposit as DirectPoolDepositEvent,
  IncreaseGuaranteedUsd as IncreaseGuaranteedUsdEvent,
  IncreasePoolAmount as IncreasePoolAmountEvent,
  IncreasePosition as IncreasePositionEvent,
  IncreaseReservedAmount as IncreaseReservedAmountEvent,
  IncreaseUsdgAmount as IncreaseUsdgAmountEvent,
  LiquidatePosition as LiquidatePositionEvent,
  SellUSDG as SellUSDGEvent,
  Swap as SwapEvent,
  UpdateFundingRate as UpdateFundingRateEvent,
  UpdatePnl as UpdatePnlEvent,
  UpdatePosition as UpdatePositionEvent
} from "../generated/Vault/Vault"
import {
  BuyUSDG,
  ClosePosition,
  CollectMarginFees,
  CollectSwapFees,
  DecreaseGuaranteedUsd,
  DecreasePoolAmount,
  DecreasePosition,
  DecreaseReservedAmount,
  DecreaseUsdgAmount,
  DirectPoolDeposit,
  IncreaseGuaranteedUsd,
  IncreasePoolAmount,
  IncreasePosition,
  IncreaseReservedAmount,
  IncreaseUsdgAmount,
  LiquidatePosition,
  SellUSDG,
  Swap,
  UpdateFundingRate,
  UpdatePnl,
  UpdatePosition
} from "../generated/schema"

export function handleBuyUSDG(event: BuyUSDGEvent): void {
  let entity = new BuyUSDG(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.token = event.params.token
  entity.tokenAmount = event.params.tokenAmount
  entity.usdgAmount = event.params.usdgAmount
  entity.feeBasisPoints = event.params.feeBasisPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleClosePosition(event: ClosePositionEvent): void {
  let entity = new ClosePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.size = event.params.size
  entity.collateral = event.params.collateral
  entity.averagePrice = event.params.averagePrice
  entity.entryFundingRate = event.params.entryFundingRate
  entity.reserveAmount = event.params.reserveAmount
  entity.realisedPnl = event.params.realisedPnl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectMarginFees(event: CollectMarginFeesEvent): void {
  let entity = new CollectMarginFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.feeUsd = event.params.feeUsd
  entity.feeTokens = event.params.feeTokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCollectSwapFees(event: CollectSwapFeesEvent): void {
  let entity = new CollectSwapFees(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.feeUsd = event.params.feeUsd
  entity.feeTokens = event.params.feeTokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseGuaranteedUsd(
  event: DecreaseGuaranteedUsdEvent
): void {
  let entity = new DecreaseGuaranteedUsd(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreasePoolAmount(event: DecreasePoolAmountEvent): void {
  let entity = new DecreasePoolAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreasePosition(event: DecreasePositionEvent): void {
  let entity = new DecreasePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.account = event.params.account
  entity.collateralToken = event.params.collateralToken
  entity.indexToken = event.params.indexToken
  entity.collateralDelta = event.params.collateralDelta
  entity.sizeDelta = event.params.sizeDelta
  entity.isLong = event.params.isLong
  entity.price = event.params.price
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseReservedAmount(
  event: DecreaseReservedAmountEvent
): void {
  let entity = new DecreaseReservedAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseUsdgAmount(event: DecreaseUsdgAmountEvent): void {
  let entity = new DecreaseUsdgAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDirectPoolDeposit(event: DirectPoolDepositEvent): void {
  let entity = new DirectPoolDeposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseGuaranteedUsd(
  event: IncreaseGuaranteedUsdEvent
): void {
  let entity = new IncreaseGuaranteedUsd(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreasePoolAmount(event: IncreasePoolAmountEvent): void {
  let entity = new IncreasePoolAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreasePosition(event: IncreasePositionEvent): void {
  let entity = new IncreasePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.account = event.params.account
  entity.collateralToken = event.params.collateralToken
  entity.indexToken = event.params.indexToken
  entity.collateralDelta = event.params.collateralDelta
  entity.sizeDelta = event.params.sizeDelta
  entity.isLong = event.params.isLong
  entity.price = event.params.price
  entity.fee = event.params.fee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseReservedAmount(
  event: IncreaseReservedAmountEvent
): void {
  let entity = new IncreaseReservedAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseUsdgAmount(event: IncreaseUsdgAmountEvent): void {
  let entity = new IncreaseUsdgAmount(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidatePosition(event: LiquidatePositionEvent): void {
  let entity = new LiquidatePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.account = event.params.account
  entity.collateralToken = event.params.collateralToken
  entity.indexToken = event.params.indexToken
  entity.isLong = event.params.isLong
  entity.size = event.params.size
  entity.collateral = event.params.collateral
  entity.reserveAmount = event.params.reserveAmount
  entity.realisedPnl = event.params.realisedPnl
  entity.markPrice = event.params.markPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSellUSDG(event: SellUSDGEvent): void {
  let entity = new SellUSDG(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.token = event.params.token
  entity.usdgAmount = event.params.usdgAmount
  entity.tokenAmount = event.params.tokenAmount
  entity.feeBasisPoints = event.params.feeBasisPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut
  entity.amountOutAfterFees = event.params.amountOutAfterFees
  entity.feeBasisPoints = event.params.feeBasisPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateFundingRate(event: UpdateFundingRateEvent): void {
  let entity = new UpdateFundingRate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.fundingRate = event.params.fundingRate

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePnl(event: UpdatePnlEvent): void {
  let entity = new UpdatePnl(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.hasProfit = event.params.hasProfit
  entity.delta = event.params.delta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePosition(event: UpdatePositionEvent): void {
  let entity = new UpdatePosition(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.key = event.params.key
  entity.size = event.params.size
  entity.collateral = event.params.collateral
  entity.averagePrice = event.params.averagePrice
  entity.entryFundingRate = event.params.entryFundingRate
  entity.reserveAmount = event.params.reserveAmount
  entity.realisedPnl = event.params.realisedPnl

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
