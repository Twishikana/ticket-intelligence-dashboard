//Creating a TicketCard Component
import type { Ticket } from "../types/ticket";

/*This defines the props for this component. Component Input -> ticket
 We are saying "Anyone using TicketCard must give me a property called ticket, 
and that property must match the Ticket interface."
onResolve: (id: number) => void;
onDelete: (id: number) => void;
This means TicketCard does not update the ticket list itself. It only tells the parent:
The user clicked resolve/delete for this ticket id.*/
interface TicketCardProps { 
  ticket: Ticket;
  onResolve: (id: number) => void;
  onDelete: (id: number) => void;
}
//Creates a reusable React component but exported so other files can use it.
export function TicketCard({ ticket, onResolve, onDelete }: TicketCardProps) {
  return (
  <div className="ticket-card">
    <div className="ticket-card-header">
      <h3>{ticket.title}</h3>

      <div className="ticket-badges">
        <span
          className={`badge status-${ticket.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {ticket.status}
        </span>

        <span className={`badge priority-${ticket.priority.toLowerCase()}`}>
          {ticket.priority}
        </span>
      </div>
    </div>

    <div className="ticket-meta">
      <p>
        <span>Owner</span>
        {ticket.owner}
      </p>
      <p>
        <span>Module</span>
        {ticket.module}
      </p>
    </div>

    <div className="ticket-actions">
      {ticket.status !== "Resolved" && (
        <button className="secondary-button" onClick={() => onResolve(ticket.id)}>
          Mark Resolved
        </button>
      )}

      <button className="danger-button" onClick={() => onDelete(ticket.id)}>
        Delete
      </button>
    </div>
  </div>
  );
}