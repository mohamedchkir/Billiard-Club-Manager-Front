import {Component, OnInit, ViewChild} from '@angular/core';
import {ServiceResponseDto} from "../../../core/model/ServiceResponseDto";
import {MatTableDataSource} from "@angular/material/table";
import {SimpleErrorResponse} from "../../../core/model/SimpleErrorResponse";
import {Observable} from 'rxjs';
import {MatPaginator} from "@angular/material/paginator";
import {select, Store} from "@ngrx/store";
import {ServiceActions} from "../../../core/state/service/service.actions";
import {selectError, selectServices} from "../../../core/state/service/service.selectors";

@Component({
  selector: 'app-service-dash',
  templateUrl: './service-dash.component.html',
  styleUrl: './service-dash.component.css'
})
export class ServiceDashComponent implements OnInit {

  displayedColumns: string[] = ['No', 'image', 'name', 'actions'];
  service$!: Observable<ServiceResponseDto[]>;
  error$!: Observable<SimpleErrorResponse>;
  dataSource = new MatTableDataSource<ServiceResponseDto>([]);
  pageSize = 5;
  pageIndex = 0;
  totalItems = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(ServiceActions.loadAllServices());
    this.service$ = this.store.pipe(select(selectServices));
    this.error$ = this.store.pipe(select(selectError)) as Observable<SimpleErrorResponse>;

    this.service$.subscribe(services => {
      this.dataSource = new MatTableDataSource(services);
      this.dataSource.paginator = this.paginator;
    });

  }

  deleteService(id: number) {
    this.store.dispatch(ServiceActions.deleteService({id}));
  }
}
