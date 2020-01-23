class myStringBuilder {
    /*
    **  Se construit par défaut vide, ou avec une chaine
    */
    constructor(_arg = "") {
        this.val = _arg;
    }

    /*
    **  Ajoute à la fin si 'pos' est nul, ou insert à l'index 'pos' si pos est défini
    **  return true si l'operation est un succès, false sinon
    */
    my_append(val, pos = null) {
        if (typeof(val) != 'string')
            return false;
        if (pos == null) {
            this.val += val;
            return true;
        } else {
            if (pos > this.val.length) {
                return false;
            } else {
                this.val = this.val.slice(0, pos) + val + this.val.slice(pos);
                return true;
            }
        }
    }

    /*
    **  Split la chaine au delimiter, et renvoie le tableau de morceaux splités
    */
    my_split(del) {
        let ret = [];
        let tmp = "";
        for (let i = 0; i < this.val.length; i++) {
            if (this.val[i] == del) {
                ret.push(tmp);
                tmp = "";
            } else {
                tmp += this.val[i];
            }
        }
        if (tmp != "")
            ret.push(tmp);
        return ret;
    }

    /*
    **  Vide la chaine et renvoie le nombre de caractère enlevé.
    */
    my_empty() {
        let c = this.val.length;
        this.val = "";
        return c;
    }

    /*
    **  Compte le nombre d'occurence dans une chaine.
    */
    my_count(token) {
        let c = 0;
        for (let i = 0; i < this.val.length; i++) {
            c += (this.val[i] == token) ? 1 : 0;
        }
        return c;
    }
}

module.exports = myStringBuilder;