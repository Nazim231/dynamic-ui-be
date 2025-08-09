import app from '@/app'

const PORT = 8000;
app.listen(PORT, (error: Error | undefined) => {
  if (error) {
    console.log("Failed to start API on PORT: %d, Closing API", PORT);
    console.error(error.message);
    process.exit(2);
  }
  console.log("API Listening on PORT: %d", PORT);
});
