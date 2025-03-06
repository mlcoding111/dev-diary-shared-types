/**
 * Represents a workspace event, such as a user switching workspaces.
 */
export type WorkspaceEvent = {
	/** Unique identifier for the event */
	id: string;

	/** Name of the event (e.g., "workspace_switched") */
	name: string;

	/** Timestamp when the event occurred */
	timestamp: number;
};

/**
 * Represents a user event, such as login/logout.
 */
export type UserEvent = {
	/** User ID */
	userId: string;

	/** Type of user action */
	action: "LOGIN" | "LOGOUT" | "WORKSPACE_CHANGE";

	/** (Optional) Workspace ID, required if action is WORKSPACE_CHANGE */
	workspaceId?: string;
};
