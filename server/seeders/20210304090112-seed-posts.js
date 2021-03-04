"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Posts", [
      {
        title: "Suatu Sore di Pelabuhan Sunda Kelapa",
        summary: "Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara.",
        image_url: "https://asset.kompas.com/crops/QS0LgpcX9R6V68B9UZkJp3jc2j0=/0x0:0x0/780x390/data/photo/2013/05/13/1204445-adrian-fajriansyah-kapal-tradisional-khas-bugis--780x390.JPG",
        content: "Suatu sore yang terik pada pertengahan Februari 2019, sejumlah remaja naik ke atas kapal layar motor Sinar Keluarga yang bersandar di Pelabuhan Sunda Kelapa, Jakarta Utara. Sesampainya di anjong (segitiga penyeimbang) yang berada di bagian depan kapal, mereka bergantian melompat. Byur, byur, prakk suara tubuh bertemu dengan air laut, susul menyusul. Sementara buruh bongkar muat di sebelahnya terus bekerja, mengangkut muatan, memindahkan barang dari truk ke kapal.",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Gosip Merger Perusahaan Teknologi di Sekitar Kita",
        summary: "Kabar rencana merger antara Gojek dan Grab serta Gojek dan Tokopedia.",
        image_url: "https://asset.kompas.com/crops/hpS4H796AuP9JJiGdjMF2qwxL0Q=/23x13:991x658/750x500/data/photo/2020/02/10/5e411542cfa4f.jpg",
        content: "Kabar rencana merger antara Gojek dan Grab serta Gojek dan Tokopedia menarik dicermati karena melibatkan dana yang sangat besar dan dapat mengubah dominasi bisnis berbasis daring.",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Posts", null, {});
  },
};
