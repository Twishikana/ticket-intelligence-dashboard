import type { TicketPriority, TicketStatus } from "./ticket";

export type StatusFilter = TicketStatus | "All";
export type PriorityFilter = TicketPriority | "All";