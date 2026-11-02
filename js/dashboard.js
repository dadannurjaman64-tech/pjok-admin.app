document.addEventListener('DOMContentLoaded', async () => {
  const session = await checkAuthSession();
  if (!session) return;
  
  const { count: studentCount } = await supabase.from('students').select('*', { count: 'exact', head: true });
  const { count: classCount } = await supabase.from('classes').select('*', { count: 'exact', head: true });
  const { count: moduleCount } = await supabase.from('modules').select('*', { count: 'exact', head: true });
  
  document.getElementById('statTotalStudents').innerText = studentCount || 0;
  document.getElementById('statTotalClasses').innerText = classCount || 0;
  document.getElementById('statTotalModules').innerText = moduleCount || 0;
  document.getElementById('statAttendanceRate').innerText = '98%';
});