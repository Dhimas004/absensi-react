import React from "react";
import { useParams } from "react-router-dom";
import AbsensiDosen from "./absensi/AbsensiDosen.jsx";
import AbsensiMahasiswa from "./absensi/AbsensiMahasiswa.jsx";

const Absensi = () => {
  const { subpages } = useParams();
  const content = (subpages) => {
    if (subpages == "dosen") {
      return <AbsensiDosen />;
    } else if (subpages == "mahasiswa") {
      return <AbsensiMahasiswa />;
    }
  };
  return <div>{content(subpages)}</div>;
};

export default Absensi;
