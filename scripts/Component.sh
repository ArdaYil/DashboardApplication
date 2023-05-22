component_name="$1"

# Check if component_name is provided
if [ -z "$component_name" ]; then
  echo "Please provide a component name."
  exit 1
fi

# Create the component file
component_file="${component_name}.tsx"

if [ -f "$component_file" ]; then
  echo "Component file already exists."
else
  echo "import React from 'react';

export default function ${component_name}() {
  return (
    <div>
      {/* Your component code here */}
    </div>
  );
};
" > "$component_file"

  echo "Component created: ${component_file}"
fi