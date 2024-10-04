import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import smk from '../../assets/smk.jpeg';

function Login() {
  const [value, setValues] = useState({
    name: '',
    nis: '',
    password: '',
    email: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Untuk navigasi halaman

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

      navigate('/dashboard'); 
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="justify-center items-center bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-900">Aplikasi Absensi Online</h2>
        <img src={smk} alt="logo" className="w-[140px] mx-auto" />
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-900 font-semibold mb-2">
              Nama Lengkap
            </label>
            <input
              type="text"
              id="name"
              placeholder="Masukan Nama"
              value={value.name}
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="nis" className="block text-blue-900 font-semibold mb-2">
              NIS
            </label>
            <input
              type="text"
              id="nis"
              placeholder="Masukan NIS"
              value={value.nis}
              name="nis"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.nis && <p className="text-red-500 text-sm">{errors.nis}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-blue-900 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Masukan Email"
              value={value.email}
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-blue-900 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Masukan Password"
              value={value.password}
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>


         
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            Belum Punya Akun?{' '}
            <Link to="/Signup" className="text-blue-600">
              Klik Disini!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
