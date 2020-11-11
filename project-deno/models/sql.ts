interface ISql{
    [index : string] : string;
}

const TSql ={} as ISql;
TSql['KtgFindAll'] = "select * from tbl_kategori;";
TSql['KtgFindByKode'] = "select * from tbl_kategori where kode = $1;";
TSql['KtgFindByKode'] = "select * from tbl_kategori where kode in($1, $2, $3, $4);";
TSql['BlogInfoFindAll'] = "select * from tbl_bloginfo;";
export default TSql;
