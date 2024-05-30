import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatContComponent } from './chat-cont.component';

describe('ChatContComponent', () => {
  let component: ChatContComponent;
  let fixture: ComponentFixture<ChatContComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatContComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
