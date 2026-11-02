document.addEventListener('DOMContentLoaded', async () => {
  const session = await checkAuthSession();
  if (!session) return;
});