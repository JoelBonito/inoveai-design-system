
// Mock Database / Service for Icons

// 1. Material Symbols (Curated List)
// In a real production app, this might come from an API or a full JSON dataset.
export const MATERIAL_SYMBOLS = [
    // Navigation
    "search", "home", "settings", "menu", "close", "arrow_back", "arrow_forward",
    "expand_more", "expand_less", "chevron_right", "chevron_left", "more_vert",
    "more_horiz", "apps", "grid_view", "list", "logout", "login", "refresh",

    // Actions
    "add", "delete", "edit", "check", "check_circle", "favorite", "star",
    "share", "download", "upload", "save", "print", "filter_list", "sort",
    "content_copy", "content_paste", "undo", "redo",

    // Alerts & Info
    "notifications", "warning", "error", "info", "help", "lock", "lock_open",
    "visibility", "visibility_off", "verified", "report",

    // Communication
    "mail", "chat", "call", "send", "person", "group", "account_circle",
    "contact_support", "forum",

    // Media
    "image", "photo_camera", "videocam", "mic", "play_arrow", "pause", "stop",
    "volume_up", "volume_off", "skip_next", "skip_previous", "movie", "music_note",

    // Hardware/Files
    "computer", "smartphone", "tablet", "desktop_windows", "keyboard", "mouse",
    "wifi", "bluetooth", "battery_full", "folder", "folder_open", "cloud",
    "attach_file", "description",

    // Editor
    "format_bold", "format_italic", "format_underlined", "link", "text_fields",
    "title", "table_chart", "insert_chart",

    // Misc
    "calendar_today", "schedule", "language", "translate", "dark_mode",
    "light_mode", "palette", "dashboard", "analytics", "shopping_cart",
    "credit_card", "receipt", "airplane_ticket", "map", "place"
];

// Helper to normalized search
export function searchIcons(list: string[], query: string): string[] {
    const q = query.toLowerCase();
    if (!q) return list;
    return list.filter(icon => icon.toLowerCase().includes(q));
}
