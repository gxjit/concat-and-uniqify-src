# Concat and Uniqify Text Files

A lightweight React app for merging multiple text-based files into a single output while removing duplicate lines.

## Features

* Drag and drop file upload
* Browse and select multiple files manually
* Supports `.txt`, `.html`, `.doc`, and `.docx`
* Concatenates file contents
* Splits content line-by-line
* Removes duplicate entries
* Downloads cleaned output as a single `.txt` file
* Responsive Bootstrap-based UI

## How It Works

1. Upload or drag multiple text files
2. Files are read asynchronously using `FileReader`
3. All file contents are merged
4. Content is split into newline-separated entries
5. Duplicate lines are removed using `Set`
6. Cleaned text is available for download

## Tech Stack

* React
* ReactDOM
* Ramda (`compose`)
* Bootstrap
* JavaScript (ES6)

## Project Structure

* `DropZone` handles drag/drop and UI
* `BrowseFiles` manages manual file selection
* `DownloadButton` exports processed output
* `processData` orchestrates file reading and deduplication
* Utility modules handle parsing, uniqueness, and file reading

## Use Cases

* Merging large text lists
* Deduplicating scraped datasets
* Cleaning log files
* Combining wordlists or exported records

## License

MIT
