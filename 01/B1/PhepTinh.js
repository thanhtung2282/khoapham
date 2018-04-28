class PhepTinh{
    constructor(tenPhepTinh,soA,soB){
        this.tenPhepTinh=tenPhepTinh;
        this.soA=soA;
        this.soB=soB;
    }
    getSign(){
        const {tenPhepTinh} = this;
        if(tenPhepTinh === 'CONG') return '+';
        if(tenPhepTinh === 'TRU') return '-';
        if(tenPhepTinh === 'NHAN') return '*';
        return '/';
    }
    getResult(){
        const {getSign,soA,soB} = this;
        const chuoiPhepTinh = `${soA} ${this.getSign()} ${soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }
}
//module.exports = {PhepTinh:PhepTinh}
module.exports = {PhepTinh}