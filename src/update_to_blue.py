import os
import re

# Color mappings: old_color -> new_color
color_map = {
    '#ff6b35': '#3b82f6',  # orange -> blue
    '#f7931e': '#06b6d4',  # amber -> cyan
    '#ff4500': '#0ea5e9',  # red-orange -> sky blue
    '#00ff88': '#3b82f6',  # green -> blue
}

# Files to update
files_to_update = [
    '/App.tsx',
    '/components/AboutPage.tsx',
    '/components/EventsPage.tsx',
    '/components/FloatingParticles.tsx',
    '/components/Footer.tsx',
    '/components/GalleryPage.tsx',
    '/components/HackingBackground.tsx',
    '/components/JourneyPage.tsx',
    '/components/LandingPage.tsx',
    '/components/TeamPage.tsx',
]

def replace_colors_in_file(filepath):
    """Replace all color codes in a file."""
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        original_content = content
        
        # Replace each color
        for old_color, new_color in color_map.items():
            # Case insensitive replacement
            pattern = re.compile(re.escape(old_color), re.IGNORECASE)
            content = pattern.sub(new_color, content)
        
        # Only write if content changed
        if content != original_content:
            with open(filepath, 'w') as f:
                f.write(content)
            print(f"✓ Updated: {filepath}")
            return True
        else:
            print(f"- No changes: {filepath}")
            return False
            
    except Exception as e:
        print(f"✗ Error updating {filepath}: {e}")
        return False

def main():
    print("=== Updating color scheme to blue ===\n")
    updated_count = 0
    
    for filepath in files_to_update:
        if replace_colors_in_file(filepath):
            updated_count += 1
    
    print(f"\n=== Complete: {updated_count} files updated ===")

if __name__ == "__main__":
    main()
