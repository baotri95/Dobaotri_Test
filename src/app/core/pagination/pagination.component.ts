import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
    @Input() page: number;
    totalPages: number;
    @Input()
    total: number;
    qtdPaginacao = 3;
    arrayPages: number[];
    @Input()
    pageChange = 0;
    @Output() mudouPagina = new EventEmitter();
    linkNulo = 'javascript:void(0)';

    constructor() { }
    ngOnChanges(changes: SimpleChanges): void {
        this.totalPages = Math.round(this.totalPages);
    }

    ngOnInit(): void {
        this.totalPages = Math.round(this.totalPages);
    }

    listaPaginas(): void {
        this.arrayPages = [];
        for (let i = 1; i <= Math.round(this.totalPages); i++) {
            this.arrayPages.push(i);
        }
    }

    @Input('totalPages')
    set updateTotalPagesValue(totalPages: number) {
        this.totalPages = totalPages;
        this.listaPaginas();
    }

    mudaPag(pag: number, pageChange): void {
        this.mudouPagina.emit({ valor: pag, pageChange });
    }

    proxPagina(): void {
        if (this.page < this.totalPages) {
            this.mudaPag(this.page + 1, this.pageChange + 20);
        }

    }

    paginaAnt(): void {
        if (this.page > 1) {
            this.mudaPag(this.page - 1, this.pageChange - 20);
        }
    }

    primeiraPag(): void {
        this.mudaPag(1, 0);
    }

    ultimaPag(): void {
        this.mudaPag(this.totalPages, (this.totalPages * 20) - 20);
    }

    diminuiPaginacao(pags): any {
        const metadePgs = Math.ceil(this.qtdPaginacao / 2);
        let i = this.page - metadePgs;
        if (i < 0) {
            i = 0;
        }
        let f = i + this.qtdPaginacao;
        if (f > pags.length) {
            f = pags.length;
            i = f - this.qtdPaginacao;
            if (i < 0) {
                i = 0;
            }
        }
        return pags.slice(i, f);
    }
}
