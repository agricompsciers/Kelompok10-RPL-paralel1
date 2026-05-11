const AdminDashboard = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Admin Dashboard</h1>
      <hr />

      {/* The SKELETON Form */}
      <div style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '30px' }}>
        <h3>Tambah Produk Baru (Mockup)</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="text" placeholder="Nama Komoditas (ex: Kopi Gayo)" style={{ padding: '8px' }} />
          <input type="text" placeholder="Kategori (ex: Kopi)" style={{ padding: '8px' }} />
          <textarea placeholder="Deskripsi Produk" rows="4" style={{ padding: '8px' }}></textarea>
          <input type="text" placeholder="URL Gambar" style={{ padding: '8px' }} />
          <button type="button" style={{ padding: '10px', backgroundColor: '#1b4324', color: 'white', border: 'none', cursor: 'pointer' }}>
            Simpan Produk
          </button>
        </form>
      </div>

      {/* The SKELETON Table */}
      <div>
        <h3>Daftar Komoditas</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#ddd' }}>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Nama</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Kategori</th>
              <th style={{ padding: '10px', border: '1px solid #ccc' }}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Kopi Gayo (Dummy Data)</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>Kopi</td>
              <td style={{ padding: '10px', border: '1px solid #ccc' }}>
                <button style={{ marginRight: '5px', color: 'blue' }}>Edit</button>
                <button style={{ color: 'red' }}>Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;