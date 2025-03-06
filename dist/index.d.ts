export type WorkspaceEvent = {
    id: string;
    name: string;
    timestamp: number;
};
export type UserEvent = {
    userId: string;
    action: "LOGIN" | "LOGOUT" | "WORKSPACE_CHANGE";
    workspaceId?: string;
};
