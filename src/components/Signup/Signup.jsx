import React, { useState } from 'react';
import smk from '../../assets/smk.jpeg';

function Signup() {
  const [value, setValues] = useState({
    name: '',
    nis: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({ ...value, [e.target.name]: e.target.value });
  }

  // Fungsi untuk memvalidasi input
  function validate(values) {
    let errors = {};

    if (!values.name.trim()) {
      errors.name = 'Nama lengkap harus diisi';
    }

    if (!values.nis.trim()) {
      errors.nis = 'NIS harus diisi';
    }

    if (!values.email) {
      errors.email = 'Email harus diisi';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Format email tidak valid';
    }

    if (!values.password) {
      errors.password = 'Password harus diisi';
    } else if (values.password.length < 6) {
      errors.password = 'Password harus minimal 6 karakter';
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate(value);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", value);
      // Lakukan tindakan setelah validasi berhasil, misalnya redirect atau lainnya
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="justify-center items-center p-8 bg-white rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-900">Aplikasi Absensi Online</h2>
        <img src={smk} alt="logo" className="w-[140px] mx-auto" />
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-blue-900 font-semibold mb-2">Nama Lengkap</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Masukan Nama"
              value={value.name}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="nis" className="block text-blue-900 font-semibold mb-2">NIS</label>
            <input
              type="text"
              id="nis"
              name="nis"
              placeholder="Masukan NIS"
              value={value.nis}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.nis && <p className="text-red-500 text-sm">{errors.nis}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Masukan Email"
              value={value.email}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-blue-900 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Masukan Password"
              value={value.password}
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
