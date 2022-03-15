const sanitizeFields = (row: any[]) =>
  row.map((field: string | number) => {
    // Escape quotes.
    let sanitizedField = `${field}`;
    sanitizedField = sanitizedField.replace(/"/g, '""');

    // Wrap the whole field in quotes if it contains problematic characters.
    if (sanitizedField.search(/("|,|\n)/g) >= 0) {
      sanitizedField = `"${sanitizedField}"`;
    }

    return sanitizedField;
  });

const exportToCsv = ({
  data,
  filename = 'csv-export.csv',
  headers = [],
}: {
  data: any[],
  filename?: string,
  headers?: string[],
}) => {
  const serializedHeaders = headers.length ? `${sanitizeFields(headers).join(',')}\n` : '';

  // Iterate over each row and then each field within.
  const serializedRows = data.map(sanitizeFields).join('\n');

  const serializedData = serializedHeaders + serializedRows;

  const csvFile = new Blob([serializedData], {
    type: 'text/csv'
  });

  const tempAnchor = document.createElement('a');
  tempAnchor.download = filename;
  tempAnchor.href = window.URL.createObjectURL(csvFile);
  tempAnchor.style.display = 'none';
  document.body.appendChild(tempAnchor);
  tempAnchor.click();
  document.body.removeChild(tempAnchor);

  return serializedData;
};

export { exportToCsv };

