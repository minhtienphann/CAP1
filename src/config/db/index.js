config = {
    user: 'sa1',
    password: '1234',
    server: 'localhost', 
    database: 'ASSISTANCECOMMUNITY',
    port: 1433,
    trustServerCertificate: true,
    options: {
        encrypt: true
      } ,
      parseJSON:'true'
};

module.exports = config;