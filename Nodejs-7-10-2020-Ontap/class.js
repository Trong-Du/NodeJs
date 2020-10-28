class GiaiPhuongTrinh {
    calDelta = (a, b, c) => {
        return b ** 2 - 4 * a * c;
    }
    ptb1 = (a, b) => {
        return a !== 0 ? -b / a : b==0 ? "phuong trinh vo so nghiem" : undefined;
    }

    ptb2 = (a, b, c) => {

        if (a == 0) return this.ptb1(b, c);
        var result = {
            x1: undefined,
            x2: undefined

        };
        if (a + b + c == 0) {
            result.x1 = 1;
            result.x2 = c / a;
            return result;
        }
        if (a - b + c == 0) {
            result.x1 = -1;
            result.x2 = -c / a;
            return result;
        }
        var delta = this.calDelta(a, b, c);
        if (delta < 0) return "Phuong trinh vo nghiem";
        if (delta == 0) {
            result.x1 = result.x2 = -b / (2 * a);
            return result;
        }
        result.x1 = (-b + Math.sqrt(delta)) / (2 * a);
        result.x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return result;
        // return a !== 0 ? -b / a : undefined;
    }
}

var giaiPhuongTrinh = new GiaiPhuongTrinh();

// console.log(giaiPhuongTrinh.ptb2(2, -7, 3));

// console.log(giaiPhuongTrinh.ptb2(3, 2, 5));

// console.log(giaiPhuongTrinh.ptb2(1, -8, 16));

// console.log(giaiPhuongTrinh.ptb2(2, -3, 1));

// console.log(giaiPhuongTrinh.ptb2(3, 5, 2));

// console.log(giaiPhuongTrinh.ptb2(0, -3, 1));

// console.log(giaiPhuongTrinh.ptb2(0, 0, 0));


////Cong ty A

// 3 phong ban
////1. Phong kinh doanh
//////1.1. tim kiem khach hang
//////1.2. tinh luong
////1. Phong ke toan
//////1.1. kiem toan
//////1.2. tinh luong
////1. Phong nhan su
//////1.1. tuyen dung
//////1.2. tinh luong

class Common {
    tinhLuong () {
        return "tinh luong";
    }
}
class saleDept extends Common{
    findCustomers() {
        return "tim khach hang";
    }
}
class accountingDept extends Common {
    account() {
        return "kiem toan";
    }
}
class hrDept extends Common {
    account() {
        return "tuyen dung";
    }
}

var hr = new hrDept();
console.log(hr.tinhLuong());


class ClassCommon {
    
}
class programing {


}