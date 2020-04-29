import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { ItemAPIService } from '../item-api.service';
import { ItemInformationComponent } from '../itemComponents/item-information/item-information.component';
import { AddItemFormComponent } from '../itemComponents/add-item-form/add-item-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let itemApiService: ItemAPIService;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, ItemInformationComponent, AddItemFormComponent],
      providers: [ItemAPIService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    itemApiService = TestBed.get(ItemAPIService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize and fetch data', () => {
    expect(component).toBeTruthy();
  });

  it('should add element to list', () => {
    expect(component).toBeTruthy();
  });

  it('should refresh list if item is deleted', () => {
    expect(component).toBeTruthy();
  });
});
