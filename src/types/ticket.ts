//defines Ticket
export type TicketStatus = "Open" | "In Progress" | "Resolved" | "Blocked";
export type TicketPriority = "Low" | "Medium" | "High" | "Critical";

export interface Ticket {
  id: number;
  title: string;
  status: TicketStatus;
  owner: string;
  module: string;
  priority: TicketPriority;
}