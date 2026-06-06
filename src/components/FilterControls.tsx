import type { PriorityFilter, StatusFilter } from "../types/filters";

interface FilterControlsProps {
  searchTerm: string;
  statusFilter: StatusFilter;
  priorityFilter: PriorityFilter;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: StatusFilter) => void;
  onPriorityChange: (value: PriorityFilter) => void;
}

export function FilterControls({
  searchTerm,
  statusFilter,
  priorityFilter,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: FilterControlsProps) {
  return (
    <><div>
          <input
              className="search-input"
              type="text"
              placeholder="Search by title, module, or owner..."
              value={searchTerm}
              onChange={(event) => onSearchChange(event.target.value)} />
      </div><div className="filter-row">
              <select
                  className="status-filter"
                  value={statusFilter}
                  onChange={(event) => onStatusChange(event.target.value as StatusFilter)}
              >
                  <option value="All">All Statuses</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Blocked">Blocked</option>
              </select>

              <select
                  className="priority-filter"
                  value={priorityFilter}
                  onChange={(event) => onPriorityChange(event.target.value as PriorityFilter)}
              >
                  <option value="All">All Priorities</option>
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                  <option value="Critical">Critical</option>
              </select>
          </div></>
  );
}