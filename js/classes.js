document.addEventListener('DOMContentLoaded', async () => {
  const session = await checkAuthSession();
  if (!session) return;
  
  const grid = document.getElementById('classesGrid');
  const { data: classes } = await supabase.from('classes').select('*').order('grade');
  if (!classes || classes.length === 0) {
    grid.innerHTML = '<div class="stat-card">Belum ada kelas terdaftar.</div>';
    return;
  }
  grid.innerHTML = classes.map(c => `
    <div class="stat-card">
      <h3 style="color: var(--color-navy);">Kelas ${c.grade}${c.rombel}</h3>
      <p style="font-size: 0.85rem; color: var(--color-text-muted);">Tahun Pelajaran: ${c.academic_year}</p>
    </div>
  `).join('');
});