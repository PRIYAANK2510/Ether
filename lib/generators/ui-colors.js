import { withAlpha, lighten, darken, mix } from '../utils/color-transform.js';

/**
 * Generate all UI colors from base theme tokens
 * @param {import('../types.js').BaseThemeTokens} tokens - Base theme tokens
 * @returns {import('../types.js').ThemeColors} UI colors object
 */
export function generateUIColors(tokens) {
  return {
    // Base colors
    foreground: tokens.primaryForeground,
    focusBorder: withAlpha(tokens.accentPrimary, 0.5),
    'selection.background': withAlpha(tokens.accentPrimary, 0.3),
    'scrollbar.shadow': tokens.darkestBackground,

    // Activity Bar
    'activityBar.foreground': tokens.accentPrimary,
    'activityBar.background': tokens.darkestBackground,
    'activityBar.inactiveForeground': withAlpha(tokens.mutedForeground, 0.6),
    'activityBarBadge.foreground': tokens.darkestBackground,
    'activityBarBadge.background': tokens.accentPrimary,
    'activityBar.border': '#00000000',
    'activityBar.activeBackground': '#00000000',

    // Side Bar
    'sideBar.background': tokens.darkestBackground,
    'sideBar.foreground': tokens.mutedForeground,
    'sideBarSectionHeader.background': tokens.darkestBackground,
    'sideBarSectionHeader.foreground': tokens.editorForeground,
    'sideBarSectionHeader.border': '#00000000',
    'sideBarTitle.foreground': tokens.accentPrimary,
    'sideBar.border': '#00000000',

    // Lists
    'list.inactiveSelectionBackground': withAlpha(tokens.accentPrimary, 0.05),
    'list.inactiveSelectionForeground': tokens.accentPrimary,
    'list.hoverBackground': withAlpha(tokens.accentPrimary, 0.05),
    'list.hoverForeground': tokens.accentPrimary,
    'list.activeSelectionBackground': withAlpha(tokens.accentPrimary, 0.15),
    'list.activeSelectionForeground': tokens.accentPrimary,
    'tree.indentGuidesStroke': withAlpha(lighten(tokens.editorForeground, 0.2), 0.3),
    'list.dropBackground': withAlpha(tokens.accentPrimary, 0.1),
    'list.highlightForeground': tokens.accentPrimary,
    'list.focusBackground': withAlpha(tokens.accentPrimary, 0.2),
    'list.focusForeground': tokens.accentPrimary,

    // List Filter Widget
    'listFilterWidget.background': tokens.inputBackground,
    'listFilterWidget.outline': withAlpha(tokens.editorForeground, 0.5),
    'listFilterWidget.noMatchesOutline': tokens.errorColor,

    // Status Bar
    'statusBar.foreground': withAlpha(tokens.mutedForeground, 0.7),
    'statusBar.background': tokens.darkestBackground,
    'statusBarItem.hoverBackground': '#00000010',
    'statusBar.border': '#00000000',
    'statusBar.debuggingBackground': tokens.errorColor,
    'statusBar.debuggingForeground': tokens.darkestBackground,
    'statusBar.debuggingBorder': '#00000000',
    'statusBar.noFolderBackground': tokens.accentPrimary,
    'statusBar.noFolderForeground': tokens.darkestBackground,
    'statusBar.noFolderBorder': '#00000000',
    'statusBarItem.remoteBackground': tokens.accentPrimary,
    'statusBarItem.remoteForeground': tokens.darkestBackground,

    // Title Bar
    'titleBar.activeBackground': tokens.darkestBackground,
    'titleBar.activeForeground': tokens.mutedForeground,
    'titleBar.inactiveBackground': tokens.darkestBackground,
    'titleBar.inactiveForeground': withAlpha(tokens.mutedForeground, 0.6),
    'titleBar.border': '#00000000',

    // Menu Bar
    'menubar.selectionForeground': tokens.accentPrimary,
    'menubar.selectionBackground': withAlpha(tokens.inputBackground, 0.1),
    'menubar.selectionBorder': '#00000000',

    // Menu
    'menu.foreground': tokens.primaryForeground,
    'menu.background': tokens.inputBackground,
    'menu.selectionForeground': tokens.accentPrimary,
    'menu.selectionBackground': withAlpha(tokens.accentPrimary, 0.2),
    'menu.selectionBorder': '#00000000',
    'menu.separatorBackground': withAlpha(tokens.mutedForeground, 0.4),
    'menu.border': tokens.darkestBackground,

    // Button
    'button.background': tokens.accentPrimary,
    'button.foreground': tokens.darkestBackground,
    'button.hoverBackground': lighten(tokens.accentPrimary, 0.05),
    'button.secondaryForeground': tokens.accentPrimary,
    'button.secondaryBackground': darken(tokens.accentPrimary, 0.6),
    'button.secondaryHoverBackground': darken(tokens.accentPrimary, 0.55),

    // Input
    'input.background': tokens.inputBackground,
    'input.border': '#00000000',
    'input.foreground': tokens.primaryForeground,
    'inputOption.activeBackground': tokens.accentPrimary,
    'inputOption.activeBorder': '#00000000',
    'inputOption.activeForeground': tokens.inputBackground,
    'input.placeholderForeground': withAlpha(tokens.mutedForeground, 0.6),

    // Text Link
    'textLink.foreground': tokens.accentPrimary,

    // Editor
    'editor.background': tokens.editorBackground,
    'editor.foreground': tokens.editorForeground,
    'editorLineNumber.foreground': withAlpha(tokens.editorForeground, 0.3),
    'editorCursor.foreground': tokens.accentPrimary,
    'editorCursor.background': tokens.editorBackground,
    'editor.selectionBackground': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.inactiveSelectionBackground': withAlpha(tokens.syntaxPurple, 0.3),
    'editorWhitespace.foreground': withAlpha(tokens.accentPrimary, 0.1),
    'editor.selectionHighlightBackground': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.selectionHighlightBorder': withAlpha(tokens.syntaxPurple, 0.5),
    'editor.findMatchBackground': withAlpha(tokens.syntaxPurple, 0.2),
    'editor.findMatchBorder': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.findMatchHighlightBackground': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.findMatchHighlightBorder': '#00000000',
    'editor.findRangeHighlightBackground': withAlpha(tokens.syntaxPurple, 0.2),
    'editor.findRangeHighlightBorder': withAlpha(tokens.syntaxPurple, 0.1),
    'editor.rangeHighlightBackground': withAlpha(tokens.editorBackground, 0.1),
    'editor.rangeHighlightBorder': withAlpha(tokens.editorBackground, 0.1),
    'editor.hoverHighlightBackground': withAlpha(tokens.syntaxPurple, 0.2),
    'editor.wordHighlightStrongBackground': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.wordHighlightStrongBorder': withAlpha(tokens.syntaxPurple, 0.3),
    'editor.wordHighlightBackground': withAlpha(tokens.syntaxPurple, 0.15),
    'editor.wordHighlightBorder': '#00000000',
    'editor.lineHighlightBackground': withAlpha(tokens.syntaxPurple, 0.1),
    'editor.lineHighlightBorder': withAlpha(tokens.syntaxPurple, 0.1),
    'editorLineNumber.activeForeground': tokens.accentPrimary,
    'editorLink.activeForeground': lighten(tokens.syntaxCyan, 0.2),

    // Editor Indent Guide
    'editorIndentGuide.background': withAlpha(tokens.editorForeground, 0.15),
    'editorIndentGuide.activeBackground': tokens.editorForeground,
    'editorRuler.foreground': withAlpha(tokens.editorForeground, 0.2),

    // Editor Bracket Match
    'editorBracketMatch.background': withAlpha(tokens.accentPrimary, 0.1),
    'editorBracketMatch.border': withAlpha(tokens.accentPrimary, 0.5),
    'editor.foldBackground': withAlpha(tokens.accentPrimary, 0.1),

    // Editor Overview Ruler
    'editorOverviewRuler.background': tokens.editorBackground,
    'editorOverviewRuler.border': tokens.editorBackground,

    // Errors and Warnings
    'editorError.foreground': tokens.errorColor,
    'editorError.background': withAlpha(tokens.errorColor, 0.1),
    'editorError.border': '#00000000',
    'editorWarning.foreground': tokens.warningColor,
    'editorWarning.background': withAlpha(tokens.warningColor, 0.1),
    'editorWarning.border': '#00000000',
    'editorInfo.foreground': tokens.infoColor,
    'editorInfo.background': withAlpha(tokens.infoColor, 0.1),
    'editorInfo.border': '#00000000',

    // Editor Gutter
    'editorGutter.background': tokens.editorBackground,
    'editorGutter.modifiedBackground': tokens.warningColor,
    'editorGutter.addedBackground': tokens.gitAdded,
    'editorGutter.deletedBackground': tokens.errorColor,
    'editorGutter.foldingControlForeground': withAlpha(tokens.editorForeground, 0.5),
    'editorCodeLens.foreground': tokens.comment,

    // Editor Group
    'editorGroup.border': tokens.darkestBackground,

    // Diff Editor
    'diffEditor.insertedTextBackground': withAlpha(tokens.gitAdded, 0.2),
    'diffEditor.insertedTextBorder': withAlpha(tokens.gitAdded, 0.05),
    'diffEditor.removedTextBackground': withAlpha(tokens.gitDeleted, 0.2),
    'diffEditor.removedTextBorder': withAlpha(tokens.gitDeleted, 0.05),
    'diffEditor.border': tokens.darkestBackground,

    // Panel
    'panel.background': tokens.panelBackground,
    'panel.border': '#00000000',
    'panelTitle.activeBorder': tokens.accentPrimary,
    'panelTitle.activeForeground': tokens.accentPrimary,
    'panelTitle.inactiveForeground': tokens.mutedForeground,

    // Badge
    'badge.background': tokens.accentPrimary,
    'badge.foreground': tokens.darkestBackground,

    // Terminal
    'terminal.foreground': tokens.editorForeground,
    'terminal.selectionBackground': withAlpha(tokens.accentPrimary, 0.3),
    'terminalCursor.background': tokens.editorBackground,
    'terminalCursor.foreground': tokens.accentPrimary,
    'terminal.border': tokens.editorBackground,
    'terminal.ansiBlack': tokens.terminalBlack,
    'terminal.ansiBlue': tokens.terminalBlue,
    'terminal.ansiBrightBlack': tokens.terminalBrightBlack,
    'terminal.ansiBrightBlue': tokens.terminalBrightBlue,
    'terminal.ansiBrightCyan': tokens.terminalBrightCyan,
    'terminal.ansiBrightGreen': tokens.terminalBrightGreen,
    'terminal.ansiBrightMagenta': tokens.terminalBrightMagenta,
    'terminal.ansiBrightRed': tokens.terminalBrightRed,
    'terminal.ansiBrightWhite': tokens.terminalBrightWhite,
    'terminal.ansiBrightYellow': tokens.terminalBrightYellow,
    'terminal.ansiCyan': tokens.terminalCyan,
    'terminal.ansiGreen': tokens.terminalGreen,
    'terminal.ansiMagenta': tokens.terminalMagenta,
    'terminal.ansiRed': tokens.terminalRed,
    'terminal.ansiWhite': tokens.terminalWhite,
    'terminal.ansiYellow': tokens.terminalYellow,

    // Breadcrumb
    'breadcrumb.background': tokens.editorBackground,
    'breadcrumb.foreground': tokens.primaryForeground,
    'breadcrumb.focusForeground': tokens.accentPrimary,
    'breadcrumb.activeSelectionForeground': tokens.accentPrimary,

    // Editor Group Header
    'editorGroupHeader.border': tokens.darkestBackground,
    'editorGroupHeader.tabsBackground': tokens.darkestBackground,
    'editorGroupHeader.tabsBorder': '#00000000',

    // Tabs
    'tab.activeForeground': tokens.accentPrimary,
    'tab.border': '#00000000',
    'tab.activeBackground': tokens.editorBackground,
    'tab.activeBorder': '#00000000',
    'tab.activeBorderTop': '#00000000',
    'tab.inactiveBackground': tokens.darkestBackground,
    'tab.inactiveForeground': tokens.mutedForeground,
    'tab.hoverBackground': '#00000000',

    // Scrollbar
    'scrollbarSlider.background': withAlpha(lighten(tokens.darkestBackground, 0.1), 0.5),
    'scrollbarSlider.hoverBackground': withAlpha(lighten(tokens.darkestBackground, 0.15), 0.7),
    'scrollbarSlider.activeBackground': lighten(tokens.darkestBackground, 0.15),

    // Progress Bar
    'progressBar.background': tokens.accentPrimary,

    // Widget
    'widget.shadow': tokens.darkestBackground,
    'editorWidget.foreground': tokens.primaryForeground,
    'editorWidget.background': tokens.panelBackground,
    'editorWidget.resizeBorder': tokens.accentPrimary,

    // Picker Group
    'pickerGroup.border': tokens.darkestBackground,
    'pickerGroup.foreground': tokens.accentPrimary,

    // Debug Tool Bar
    'debugToolBar.background': tokens.panelBackground,
    'debugToolBar.border': tokens.inputBackground,

    // Notifications
    'notifications.foreground': tokens.primaryForeground,
    'notifications.background': tokens.panelBackground,
    'notificationToast.border': tokens.inputBackground,
    'notificationsErrorIcon.foreground': tokens.errorColor,
    'notificationsWarningIcon.foreground': tokens.warningColor,
    'notificationsInfoIcon.foreground': tokens.infoColor,
    'notificationCenter.border': tokens.inputBackground,
    'notificationCenterHeader.foreground': tokens.primaryForeground,
    'notificationCenterHeader.background': tokens.inputBackground,
    'notifications.border': tokens.inputBackground,

    // Git Decoration
    'gitDecoration.addedResourceForeground': tokens.gitAdded,
    'gitDecoration.conflictingResourceForeground': tokens.gitConflicting,
    'gitDecoration.deletedResourceForeground': tokens.gitDeleted,
    'gitDecoration.ignoredResourceForeground': tokens.gitIgnored,
    'gitDecoration.modifiedResourceForeground': tokens.gitModified,
    'gitDecoration.stageDeletedResourceForeground': tokens.gitDeleted,
    'gitDecoration.stageModifiedResourceForeground': tokens.gitModified,
    'gitDecoration.submoduleResourceForeground': tokens.gitConflicting,
    'gitDecoration.untrackedResourceForeground': lighten(tokens.gitAdded, 0.1),

    // Editor Marker Navigation
    'editorMarkerNavigation.background': tokens.panelBackground,
    'editorMarkerNavigationError.background': tokens.errorColor,
    'editorMarkerNavigationWarning.background': tokens.warningColor,
    'editorMarkerNavigationInfo.background': tokens.infoColor,

    // Merge Conflicts
    'merge.currentHeaderBackground': withAlpha(tokens.gitAdded, 0.3),
    'merge.currentContentBackground': withAlpha(tokens.gitAdded, 0.1),
    'merge.incomingHeaderBackground': withAlpha(tokens.infoColor, 0.3),
    'merge.incomingContentBackground': withAlpha(tokens.infoColor, 0.1),
    'merge.commonHeaderBackground': withAlpha(tokens.mutedForeground, 0.3),
    'merge.commonContentBackground': withAlpha(tokens.mutedForeground, 0.1),

    // Editor Suggest Widget
    'editorSuggestWidget.background': tokens.panelBackground,
    'editorSuggestWidget.border': withAlpha(tokens.editorForeground, 0.1),
    'editorSuggestWidget.foreground': tokens.editorForeground,
    'editorSuggestWidget.highlightForeground': tokens.accentPrimary,
    'editorSuggestWidget.selectedBackground': darken(tokens.panelBackground, 0.05),

    // Editor Hover Widget
    'editorHoverWidget.foreground': tokens.editorForeground,
    'editorHoverWidget.background': tokens.panelBackground,
    'editorHoverWidget.border': withAlpha(tokens.editorForeground, 0.1),

    // Peek View
    'peekView.border': tokens.accentPrimary,
    'peekViewEditor.background': darken(tokens.editorBackground, 0.1),
    'peekViewEditorGutter.background': darken(tokens.editorBackground, 0.1),
    'peekViewEditor.matchHighlightBackground': withAlpha(tokens.accentPrimary, 0.3),
    'peekViewEditor.matchHighlightBorder': tokens.accentPrimary,
    'peekViewResult.background': darken(tokens.editorBackground, 0.1),
    'peekViewResult.fileForeground': tokens.primaryForeground,
    'peekViewResult.lineForeground': tokens.editorForeground,
    'peekViewResult.matchHighlightBackground': withAlpha(tokens.accentPrimary, 0.4),
    'peekViewResult.selectionBackground': withAlpha(tokens.accentPrimary, 0.3),
    'peekViewResult.selectionForeground': tokens.primaryForeground,
    'peekViewTitle.background': tokens.panelBackground,
    'peekViewTitleDescription.foreground': tokens.mutedForeground,
    'peekViewTitleLabel.foreground': tokens.primaryForeground,

    // Icon
    'icon.foreground': tokens.primaryForeground,

    // Checkbox
    'checkbox.background': tokens.inputBackground,
    'checkbox.foreground': tokens.primaryForeground,
    'checkbox.border': '#00000000',

    // Dropdown
    'dropdown.background': tokens.inputBackground,
    'dropdown.foreground': tokens.primaryForeground,
    'dropdown.border': '#00000000',

    // Minimap
    'minimapGutter.addedBackground': tokens.gitAdded,
    'minimapGutter.modifiedBackground': tokens.gitModified,
    'minimapGutter.deletedBackground': tokens.gitDeleted,
    'minimap.findMatchHighlight': withAlpha(tokens.syntaxPurple, 0.2),
    'minimap.selectionHighlight': withAlpha(tokens.syntaxPurple, 0.3),
    'minimap.errorHighlight': tokens.errorColor,
    'minimap.warningHighlight': tokens.warningColor,
    'minimap.background': tokens.editorBackground,

    // Side Bar
    'sideBar.dropBackground': withAlpha(tokens.accentPrimary, 0.1),

    // Editor Group
    'editorGroup.emptyBackground': tokens.editorBackground,

    // Panel Section
    'panelSection.border': withAlpha(tokens.editorForeground, 0.1),

    // Status Bar Item
    'statusBarItem.activeBackground': '#FFFFFF25',

    // Settings
    'settings.headerForeground': tokens.primaryForeground,
    'settings.focusedRowBackground': '#ffffff07',

    // Walk Through
    'walkThrough.embeddedEditorBackground': '#00000050',

    // Editor Gutter Comment Range
    'editorGutter.commentRangeForeground': withAlpha(tokens.editorForeground, 0.5),

    // Debug Exception Widget
    'debugExceptionWidget.background': tokens.panelBackground,
    'debugExceptionWidget.border': tokens.inputBackground,

    // Editor Bracket Highlighting
    'editorBracketHighlight.foreground1': mix(tokens.syntaxBlue, tokens.syntaxCyan, 0.5),
    'editorBracketHighlight.foreground2': mix(tokens.syntaxGreen, tokens.syntaxCyan, 0.5),
    'editorBracketHighlight.foreground3': mix(tokens.syntaxPurple, tokens.syntaxRed, 0.5),
    'editorBracketHighlight.foreground4': mix(tokens.syntaxOrange, tokens.syntaxYellow, 0.5),
    'editorBracketHighlight.foreground5': mix(tokens.syntaxCyan, tokens.syntaxBlue, 0.3),
    'editorBracketHighlight.foreground6': mix(tokens.syntaxGreen, tokens.syntaxYellow, 0.5),
  };
}
