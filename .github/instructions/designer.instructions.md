# React Beauty Design System – Styling Source of Truth

## Surface & Primary Colors Guidance

- **Intent-based mapping for surface and primary backgrounds:**  
  | Intent                | Token Name (CSS Variable)         | Example Color Name   | Example Value   | Usage Description                        |
  |-----------------------|-----------------------------------|----------------------|-----------------|------------------------------------------|
  | Surface Background    | --rb-colors-surface-ash-gray      | Ash gray            | #c3cbb9         | Default surface backgrounds              |
  | Surface Alt          | --rb-colors-surface-beige         | Beige               | #d6dfcb         | Alternate backgrounds                    |
  | Surface Subtle       | --rb-colors-surface-honeydew      | Honeydew            | #ebf5df         | Subtle/secondary backgrounds             |
  | Surface Accent       | --rb-colors-surface-tea-green     | Tea green           | #d3e5c5         | Accent backgrounds                       |
  | Surface Muted        | --rb-colors-surface-celadon       | Celadon             | #bad4aa         | Muted/low emphasis backgrounds           |
  | Surface Overlay      | --rb-colors-surface-overlay       | Ash gray 100        | #272d21         | Overlays, modals, or elevated surfaces   |
  | Surface Mid          | --rb-colors-surface-mid           | Celadon 300         | #768663         | Mid-tone neutral for flexible layouts    |
  | On Surface BG        | --rb-colors-on-surface-ash-gray   | Ash gray 100        | #272d21         | Text/icons on Surface Background         |
  | On Surface Alt       | --rb-colors-on-surface-beige      | Beige 100           | #2c3521         | Text/icons on Surface Alt                |
  | Primary BG           | --rb-colors-primary-vanilla       | Vanilla             | #d4d4aa         | Main primary background                  |
  | Primary Alt          | --rb-colors-primary-ecru          | Ecru                | #e1c481         | Alternate primary background             |
  | Primary Highlight    | --rb-colors-primary-hunyadi       | Hunyadi yellow      | #edb458         | Highlight/active elements                |
  | Primary Strong       | --rb-colors-primary-fulvous       | Fulvous             | #e8871e         | Strong/active primary elements           |
  | Primary Accent       | --rb-colors-primary-carrot-orange | Carrot orange       | #ea9232         | Accent/active primary elements           |
  | On Primary BG        | --rb-colors-on-primary-vanilla    | Vanilla 100         | #33331a         | Text/icons on Primary BG                 |
  | On Primary Strong    | --rb-colors-on-primary-fulvous    | Fulvous 100         | #2f1b05         | Text/icons on Primary Strong             |
  | Surface Danger       | --rb-colors-surface-danger        | Soft Red            | #f3b3b3         | Background for danger/snack alerts       |
  | Surface Warning      | --rb-colors-surface-warning       | Soft Amber          | #f7e3b3         | Background for warning/snack alerts      |
  | Surface Info         | --rb-colors-surface-info          | Soft Blue           | #b3d6f7         | Background for info/snack alerts         |
  | Surface Success      | --rb-colors-surface-success       | Celadon             | #bad4aa         | Background for success/snack alerts      |
  | On Surface Danger    | --rb-colors-on-surface-danger     | Soft Red 900        | #6b3535         | Text/icons on Surface Danger             |
  | On Surface Warning   | --rb-colors-on-surface-warning    | Soft Amber 900      | #6b5a35         | Text/icons on Surface Warning            |
  | On Surface Info      | --rb-colors-on-surface-info       | Soft Blue 900       | #35506b         | Text/icons on Surface Info               |
  | On Surface Success   | --rb-colors-on-surface-success    | Celadon 100         | #23331a         | Text/icons on Surface Success            |

- **Notes on usage:**
  - Use `--rb-colors-surface-overlay` for overlays, modals, or elevated surfaces to provide depth and support dark mode.
  - Use `--rb-colors-surface-mid` as a mid-tone neutral for flexible layouts, especially where more separation is needed between elements.
  - Always pair background tokens with their corresponding `on` tokens (e.g., `--rb-colors-on-surface-ash-gray` for text/icons on `--rb-colors-surface-ash-gray`) to ensure sufficient contrast.
  - For primary actions, use `--rb-colors-on-primary-fulvous` for text/icons on `--rb-colors-primary-fulvous`, and `--rb-colors-on-primary-vanilla` for text/icons on `--rb-colors-primary-vanilla`.
  - Test all color pairings in real UI contexts (buttons, cards, backgrounds, etc.) with both normal and large text to ensure accessibility and visual harmony.


## Spacing & Layout

- **Standardized Spacing Scale:**  
  Use a consistent, incremental scale for all spacing, margins, paddings, and gaps.
  | Spacing Token   | CSS Variable         | Value  | Usage Example                |
  |-----------------|----------------------|--------|------------------------------|
  | Space 0         | --rb-space-0         | 0px    | Reset, no space              |
  | Space XS        | --rb-space-1         | 4px    | Smallest gap, icon spacing   |
  | Space SM        | --rb-space-2         | 8px    | Compact padding, small gaps  |
  | Space MD        | --rb-space-3         | 12px   | Default padding, grid gaps   |
  | Space LG        | --rb-space-4         | 16px   | Section padding, card gap    |
  | Space XL        | --rb-space-5         | 20px   | Large section spacing        |
  | Space 2XL       | --rb-space-6         | 32px   | Page gutters, major spacing  |
  | Space 3XL       | --rb-space-7         | 40px   | Hero/section separation      |

- **Layout Guidelines:**
  - Use spacing tokens for all margin, padding, and gap properties in components and layouts.
  - Prefer even multiples of the base spacing unit (4px) for visual rhythm and consistency.
  - Use `gap` for spacing between flex/grid children, not margin hacks.
  - For responsive layouts, use spacing tokens in combination with media queries or container queries.
  - Avoid deeply nested containers; use spacing and layout primitives for clarity and maintainability.

## Typography

| Font Size Token      | CSS Variable             | Example Value |
|---------------------|--------------------------|--------------|
| Font Micro           | --rb-font-size-micro     | 10px         |
| Font XS              | --rb-font-size-xs        | 12px         |
| Font SM              | --rb-font-size-sm        | 14px         |
| Font MD              | --rb-font-size-md        | 16px         |
| Font LG              | --rb-font-size-lg        | 18px         |
| Font XL              | --rb-font-size-xl        | 20px         |
| Font 2XL             | --rb-font-size-2xl       | 24px         |
| Font 3XL             | --rb-font-size-3xl       | 32px         |

| Font Family Token    | CSS Variable               | Example Value                                                                 |
|---------------------|----------------------------|-------------------------------------------------------------------------------|
| Font Family Base    | --rb-font-family-base      | 'Mulish', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif |
| Font Family Mono    | --rb-font-family-mono      | 'Fira Mono', 'Menlo', 'Monaco', monospace                                    |

| Font Weight Token    | CSS Variable               | Example Value | Usage Example                |
|---------------------|----------------------------|--------------|------------------------------|
| Weight Micro        | --rb-font-weight-micro     | 400          | Micro text, overline         |
| Weight XS           | --rb-font-weight-xs        | 400          | Caption, small text          |
| Weight SM           | --rb-font-weight-sm        | 400          | Body, label                  |
| Weight MD           | --rb-font-weight-md        | 400          | Default, body                |
| Weight LG           | --rb-font-weight-lg        | 500          | Emphasis, subheading         |
| Weight XL           | --rb-font-weight-xl        | 600          | Heading, strong subheading   |
| Weight 2XL          | --rb-font-weight-2xl       | 700          | Main heading, bold           |
| Weight 3XL          | --rb-font-weight-3xl       | 700          | Display, extra bold          |

| Line Height Token   | CSS Variable               | Example Value |
|---------------------|----------------------------|--------------|
| Line Height Micro   | --rb-line-height-micro     | 1.2          |
| Line Height XS      | --rb-line-height-xs        | 1.25         |
| Line Height SM      | --rb-line-height-sm        | 1.4          |
| Line Height MD      | --rb-line-height-md        | 1.5          |
| Line Height LG      | --rb-line-height-lg        | 1.5          |
| Line Height XL      | --rb-line-height-xl        | 1.2          |
| Line Height 2XL     | --rb-line-height-2xl       | 1.1          |
| Line Height 3XL     | --rb-line-height-3xl       | 1.1          |

| Letter Spacing Token| CSS Variable               | Example Value |
|---------------------|----------------------------|--------------|
| Letter Spacing Micro| --rb-letter-spacing-micro  | 0.02em       |
| Letter Spacing XS   | --rb-letter-spacing-xs     | 0.01em       |
| Letter Spacing SM   | --rb-letter-spacing-sm     | 0em          |
| Letter Spacing MD   | --rb-letter-spacing-md     | 0em          |
| Letter Spacing LG   | --rb-letter-spacing-lg     | 0em          |
| Letter Spacing XL   | --rb-letter-spacing-xl     | 0.01em       |
| Letter Spacing 2XL  | --rb-letter-spacing-2xl    | 0.02em       |
| Letter Spacing 3XL  | --rb-letter-spacing-3xl    | 0.03em       |

### Typography Guidelines

- Always use the provided font size, font weight, line height, letter spacing, and font family tokens for all text elements; never hardcode pixel values, numeric values, or font family names.
- Use `--rb-font-family-base` for all standard text and UI elements, and `--rb-font-family-mono` for code or monospaced text.
- Use `--rb-font-size-micro` and `--rb-font-size-xs` for microcopy, legal, or UI hints, paired with their respective font weight, line height, and letter spacing tokens.
- Use `--rb-font-size-sm` and `--rb-font-size-md` for body text and standard UI labels, with matching font weight, line height, and letter spacing tokens.
- Use `--rb-font-size-lg` and above for headings, section titles, and display text, with their corresponding font weight, line height, and letter spacing tokens.
- Maintain a clear visual hierarchy by using consistent font sizes, weights, line heights, and letter spacing for similar roles across the UI.
- If a new size, weight, line height, or letter spacing is needed, request its addition to the `css-token` package.

## Border Radius

| Radius Token         | CSS Variable                 | Example Value |
|---------------------|------------------------------|--------------|
| Radius 0            | --rb-border-radius-0         | 0px          |
| Radius 2            | --rb-border-radius-2         | 2px          |
| Radius XS           | --rb-border-radius-xs        | 4px          |
| Radius SM           | --rb-border-radius-sm        | 8px          |
| Radius MD           | --rb-border-radius-md        | 12px          |
| Radius LG           | --rb-border-radius-lg        | 16px          |
| Radius XL           | --rb-border-radius-xl        | 24px          |
| Radius 2XL          | --rb-border-radius-2xl       | 32px         |
| Fully Rounded       | --rb-border-radius-rounded   | 9999px       |

## Border Radius Guidelines

- Always use the provided border radius tokens for all corners; never hardcode pixel values.
- Use smaller radii (e.g., `--rb-border-radius-2`, `--rb-border-radius-xs`) for compact UI elements like buttons, inputs, and tags.
- Use medium radii (e.g., `--rb-border-radius-sm`, `--rb-border-radius-md`) for cards, modals, and containers.
- Use larger radii (e.g., `--rb-border-radius-lg`, `--rb-border-radius-xl`, `--rb-border-radius-2xl`) for prominent surfaces or to create a softer, more approachable look.
- Use `--rb-border-radius-rounded` for fully circular elements, such as avatars or pill-shaped buttons.
- Maintain consistency in radius usage for similar components throughout the UI.
- If a new radius is needed, request its addition to the `css-token` package.


### Standard "Primary" Color Combination

- The standard "primary" intent in React Beauty uses a specific combination of orange palette tokens for all components:
  - **Default State:**
    - Background: `--rb-colors-primary-fulvous` (#e8871e)
    - Text/Icon: `--rb-colors-on-primary-fulvous` (#2f1b05)
  - **Hover/Focus State:**
    - Background: `--rb-colors-primary-carrot-orange` (#ea9232)
    - Text/Icon: `--rb-colors-on-primary-fulvous`
  - **Active State:**
    - Background: `--rb-colors-primary-hunyadi` (#edb458)
    - Text/Icon: `--rb-colors-on-primary-fulvous`
  - **Border:**
    - Use `--rb-colors-primary-fulvous` by default, with hover/active using carrot orange and hunyadi as above.
- This combination must be used for all `primary` intent backgrounds, borders, and text/icons in every component (e.g., buttons, tabs, toggles, highlights, etc.) for consistency and accessibility.
- Always pair background tokens with their corresponding `on` tokens for text/icons.

### Standard "Surface" Color Combination

- The standard "surface" intent in React Beauty uses a specific combination of neutral palette tokens for all components:
  - **Default State:**
    - Background: `--rb-colors-surface-ash-gray` (#c3cbb9)
    - Text/Icon: `--rb-colors-on-surface-ash-gray` (#272d21)
  - **Alt/Secondary State:**
    - Background: `--rb-colors-surface-beige` (#d6dfcb)
    - Text/Icon: `--rb-colors-on-surface-beige` (#2c3521)
  - **Subtle/Accent/Muted States:**
    - Background: `--rb-colors-surface-honeydew` (#ebf5df), `--rb-colors-surface-tea-green` (#d3e5c5), `--rb-colors-surface-celadon` (#bad4aa)
    - Use corresponding "on" tokens for text/icons.
  - **Overlay/Elevated State:**
    - Background: `--rb-colors-surface-overlay` (#272d21)
    - Text/Icon: `--rb-colors-on-surface-ash-gray` (#272d21) or as appropriate for contrast
  - **Mid-tone State:**
    - Background: `--rb-colors-surface-mid` (#768663)
    - Use with appropriate "on" token for text/icons.
  - **Border:**
    - Use a surface or neutral border token as defined in the design system (e.g., `--rb-colors-border-subtle`).
- Always pair surface background tokens with their corresponding "on" tokens for text/icons to ensure contrast and accessibility.
- This combination must be used for all `surface` intent backgrounds, borders, and text/icons in every component (e.g., cards, sheets, modals, containers, etc.) for consistency and accessibility.


#### Disabled State Color Tokens

- If you need to define or extend disabled state tokens for color harmony, use the following as a starting point:
  | Token Name (CSS Variable)         | Example Color Name   | Example Value   | Usage Description                  |
  |-----------------------------------|----------------------|-----------------|------------------------------------|
  | --rb-colors-disabled-bg           | Disabled Gray        | #bfc3b6         | Disabled backgrounds (optional)    |
  | --rb-colors-disabled-fg           | Disabled Text        | #8a8e87         | Disabled text/icons (optional)     |
  | --rb-colors-disabled-border       | Disabled Border      | #bfc3b6         | Disabled borders (optional)        |
- These tokens must be used for all disabled backgrounds, borders, and text/icons in every component (e.g., buttons, inputs, toggles, etc.) for consistency and accessibility.
- Always ensure sufficient contrast for disabled states, and do not use opacity alone to indicate disabled.

## General Guidelines

- **Always use the tokens above for all UI styling.**
- **Ensure sufficient color contrast for accessibility.**
- **Document any new tokens and their intended use.**

This document is the single source of truth for all styling decisions in React Beauty. All designers and developers must follow these guidelines for consistency and maintainability.
