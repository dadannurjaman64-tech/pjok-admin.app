document.addEventListener('DOMContentLoaded', async () => {
  const session = await checkAuthSession();
  if (!session) return;
  loadStudents();
});

async function loadStudents() {
  const tbody = document.getElementById('studentsTableBody');
  const { data: students, error } = await supabase.from('students').select('*, classes(grade, rombel)').order('full_name');
  if (error || !students || students.length === 0) {
    tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 2rem;">Belum ada data siswa.</td></tr>';
    return;
  }
  tbody.innerHTML = students.map(s => `
    <tr>
      <td style="padding: 0.75rem 1rem;">${s.nisn || '-'}</td>
      <td style="padding: 0.75rem 1rem;"><strong>${s.full_name}</strong></td>
      <td style="padding: 0.75rem 1rem;">${s.gender === 'L' ? 'Laki-laki' : 'Perempuan'}</td>
      <td style="padding: 0.75rem 1rem;">Kelas ${s.classes ? s.classes.grade + s.classes.rombel : '-'}</td>
      <td style="padding: 0.75rem 1rem;"><span class="badge ${s.is_active ? 'badge-success' : 'badge-danger'}">${s.is_active ? 'Aktif' : 'Non-Aktif'}</span></td>
      <td style="padding: 0.75rem 1rem; text-align: center;"><button class="btn btn-xs">Edit</button></td>
    </tr>
  `).join('');
}

function openAddStudentModal() {
  alert('Form Tambah Siswa siap.');
}