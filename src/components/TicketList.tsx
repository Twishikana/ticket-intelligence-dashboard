import type { Ticket } from "../types/ticket";
import { TicketCard } from "./TicketCard";

interface TicketListProps {
  tickets: Ticket[];
  onResolve: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TicketList({ tickets, onResolve, onDelete }: TicketListProps) {
  if (tickets.length === 0) {
    return (
      <p className="empty-state">
        No tickets found. Try changing your search, status, or priority filter.
      </p>
    );
  }

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onResolve={onResolve}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}