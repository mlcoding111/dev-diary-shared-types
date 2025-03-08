/**
 * Represents the configuration for the application.
 */
export interface Config {
	/** Whether tracking is enabled */
	tracking_enabled: boolean;

	/** Whether to track files */
	files_tracking: boolean;

	/** Track how often user switches between VS Code and other apps */
	focus_tracking: boolean;

	/** Time in seconds of idle time. User is still in VS Code, but not doing anything */
	idle_time: number;

	/** Time in seconds of active time. User is typing, coding, etc */
	active_time: number;

	/** Time in seconds of unfocused time. User is away from VS Code, but still in the same workspace */
	unfocused_time: number;

	/** Time in seconds before considering a user "idle" */
	idle_threshold: number;

	/** Time in seconds before considering a user "active" */
	active_threshold: number;

	/** Time in seconds before considering a user "inactive" */
	inactive_threshold: number;

	/** Time in seconds before considering a user "unfocused" */
	unfocused_threshold: number;

	/** Auto-stop tracking after this time */
	session_timeout: number;

	/** Projects to ignore */
	ignored_projects: string[];

	/** Files to ignore by name */
	ignored_files: string[];

	/** Files to ignore by type/extension */
	files_type_ignore: string[];
}
