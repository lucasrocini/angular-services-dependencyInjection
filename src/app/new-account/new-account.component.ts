import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService] //AccountsService
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

constructor(private loggingService: LoggingService,
            private accountsService: AccountsService) {
  this.accountsService.statusUpdated.subscribe(
    (status: string) => alert('New Status: ' + status)
  );
}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

    // Example of what not to do to call an angular service
    // const service = new LoggingService();
    // service.logStatusChange(accountStatus);

    // Another way to console.log but without a service
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
