#!/bin/bash

# Install jq, a command-line JSON processor (if not already installed)
# sudo apt-get install jq  # For Debian/Ubuntu systems
# sudo yum install jq      # For CentOS/RHEL systems

# Define your JSON file
json_file="skills.json"

# Extract name, icon, and URL using jq
jq -r '.skills[] | [.name, .icon, .url] | @tsv' "$json_file" | while IFS=$'\t' read -r name icon url; do

  # Ensure the URL field exists and is not "None"
  if [[ -n $url && $url != "None" ]]; then
    # Extract filename from icon path
    filename=$(basename "$icon")

    # Download the icon using wget
    wget "$url" -O "$filename"

    if [ $? -eq 0 ]; then  # Check if wget exited successfully
       echo "Downloaded: $filename"
    else
       echo "$(date) - Error downloading: $url" >> ./download_errors.log
    fi
  fi

done