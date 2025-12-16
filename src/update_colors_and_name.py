import os
import re

# Define color replacements
color_replacements = {
    '#00ff88': '#ff6b35',
    '#06b6d4': '#f7931e',
    '#0ea5e9': '#ff4500',
}

# Define text replacements
text_replacements = {
    'CyberShield': 'CYBERSHIELD AISSMS IOIT',
    'Empowering Cybersecurity Excellence: Where Experts Connect, Learn, and Lead': 'Empowering Cybersecurity Excellence at AISSMS IOIT',
}

# Files to update
files_to_update = [
    '/components/Navbar.tsx',
    '/components/Footer.tsx',
    '/components/LandingPage.tsx',
    '/components/EventsPage.tsx',
    '/components/GalleryPage.tsx',
    '/components/TeamPage.tsx',
    '/components/AboutPage.tsx',
    '/components/JourneyPage.tsx',
]

def update_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
        
        # Replace colors (case insensitive)
        for old_color, new_color in color_replacements.items():
            content = re.sub(re.escape(old_color), new_color, content, flags=re.IGNORECASE)
        
        # Replace text
        for old_text, new_text in text_replacements.items():
            content = content.replace(old_text, new_text)
        
        with open(filepath, 'w') as f:
            f.write(content)
            
        print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error updating {filepath}: {e}")

# Update all files
for filepath in files_to_update:
    update_file(filepath)

print("All files updated successfully!")
