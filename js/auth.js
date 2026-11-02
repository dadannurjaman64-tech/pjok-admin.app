async function checkAuthSession() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  
  const user = session.user;
  const nameEl = document.getElementById('userDisplayName');
  if (nameEl) nameEl.innerText = user.user_metadata?.full_name || user.email;
  
  return session;
}

async function handleLogout() {
  await supabase.auth.signOut();
  window.location.href = 'login.html';
}
