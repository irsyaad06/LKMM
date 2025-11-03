import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown } from "react-icons/hi";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";

interface AccordionItem {
  id: number;
  title: string;
  content: React.ReactNode;
  color: string;
}

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Syarat Pendaftaran",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Formulir Pendaftaran LKMM.</li>
        <li>Surat Pernyataan Calon Pendaftar.</li>
        <li>Surat Izin Orang Tua.</li>
        <li>Curriculum Vitae (CV).</li>
        <li>
          Surat Keterangan Aktif Mahasiswa.{" "}
          <span className="italic text-sm text-slate-400">
            (Didapatkan di student admission –{" "}
            <a
              href="mailto:admisi@email.unikom.ac.id"
              className="text-blue-400 underline"
            >
              admisi@email.unikom.ac.id
            </a>
            )
          </span>
        </li>
        <li>Sertifikat Kuliah Bersama.</li>
        <li>Minimal IPK harus 2.75.</li>
        <li>
          Mengumpulkan transkrip nilai.{" "}
          <span className="italic text-sm text-slate-400">
            (Didapatkan di{" "}
            <a
              href="https://mahasiswa.unikom.ac.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              mahasiswa.unikom.ac.id
            </a>
            )
          </span>
        </li>
        <li>Wajib mengikuti seluruh rangkaian LKMM.</li>
        <li>Pendaftaran dikhususkan untuk Angkatan 2023 dan 2024.</li>
      </ul>
    ),
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    title: "Alur Pendaftaran",
    content: (
      <ul className="list-decimal list-inside space-y-2">
        <li>
          Mendownload berkas yang sudah disediakan panitia melalui link di bawah.
        </li>
        <li>
          Mengumpulkan seluruh berkas secara <b>offline</b> ke{" "}
          <b>Sekre HMIF Kampus 4 Lt.4 R.4416</b> (Belakang Gedung Miracle).
        </li>
        <li>
          Seluruh berkas disatukan dalam <b>map kertas berwarna biru.</b>
        </li>
      </ul>
    ),
    color: "from-green-400 to-emerald-300",
  },
  {
    id: 3,
    title: "Catatan Tambahan",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Jika tidak memiliki sertifikat Kuliah Bersama, wajib menggunakan{" "}
          <b>Surat Keterangan Sementara</b> (tersedia di link berkas).
        </li>
        <li>
          Peserta wajib mengikuti Kuliah Bersama di kemudian hari sebagai syarat
          pelengkap.
        </li>
      </ul>
    ),
    color: "from-amber-400 to-yellow-300",
  },
  {
    id: 4,
    title: "Link Pendaftaran",
    content: (
      <div className="space-y-3">
        <p>
          Klik tombol di bawah untuk mengisi formulir pendaftaran LKMM 2025 dan
          gunakan akun <b>email UNIKOM</b> kamu untuk login.
        </p>
        <a
          href="https://bit.ly/formlkmm2025"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 transition"
        >
          <FaExternalLinkAlt />
          Buka Formulir Pendaftaran
        </a>
        <p className="text-sm text-slate-400 flex items-center gap-2">
          <FaEnvelope className="text-slate-400" /> Gunakan email UNIKOM saat
          mengisi formulir (contoh:{" "}
          <span className="font-mono text-slate-300">
            namamu@mahasiswa.unikom.ac.id
          </span>
          )
        </p>
      </div>
    ),
    color: "from-purple-400 to-pink-300",
  },
];

const Information: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] px-4">
      <div className="flex flex-col w-full max-w-2xl space-y-3">
        {accordionItems.map((item, index) => (
          <motion.div
            key={item.id}
            className="rounded-lg bg-slate-800 border border-slate-700 overflow-hidden shadow-md shadow-slate-900/30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            layout
          >
            {/* Header */}
            <motion.button
              className={`${
                activeId === item.id
                  ? "text-[#d2e5f5]"
                  : "text-[#d2e5f5]/60"
              } w-full p-4 text-left font-medium text-lg flex justify-between items-center`}
              onClick={() => toggleAccordion(item.id)}
            >
              <motion.span
                className="font-bold"
                animate={{ scale: activeId === item.id ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                {item.title}
              </motion.span>
              <motion.div
                animate={{ rotate: activeId === item.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-2xl"
              >
                <HiChevronDown />
              </motion.div>
            </motion.button>

            {/* Content */}
            <AnimatePresence>
              {activeId === item.id && (
                <motion.div
                  className="overflow-hidden bg-slate-800"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-[#d2e5f5] relative">
                    {item.content}
                    <motion.div
                      className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.3 }}
                      exit={{ width: 0, transition: { duration: 0.2 } }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Information;
