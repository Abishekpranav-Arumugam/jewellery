import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { GoldApiService } from '../services/goldapi.service';
import { CartService } from '../services/cart.service';
import { JewelleryService } from '../services/jewellery.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule, 
        FormsModule, 
        GooglePayButtonModule
      ],
      declarations: [HomeComponent],
      providers: [GoldApiService, CartService, JewelleryService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});