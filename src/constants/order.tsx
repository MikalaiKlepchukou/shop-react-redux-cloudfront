export enum OrderStatus {
  OPEN = "OPEN",
  // Approved = "APPROVED",
  // Confirmed = "CONFIRMED",
  // Sent = "SENT",
  // Completed = "COMPLETED",
  // Cancelled = "CANCELLED",
  ORDERED = "ORDERED",
}

export const ORDER_STATUS_FLOW = Object.values(OrderStatus);
