import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProgressBarComponent } from "./progress-bar.component";
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule, MatSlideToggleModule,MatFormFieldModule, MatInputModule, MatButtonToggleModule, MatSliderModule } from '@angular/material';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatSliderModule,
    ],
    declarations: [
        ProgressBarComponent,
        ModalComponent
    ],
    exports: [
        ProgressBarComponent,
        ModalComponent
    ],
})

export class ProgressBarModule {}