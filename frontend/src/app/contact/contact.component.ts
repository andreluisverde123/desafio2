import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  items: any;
  loading: boolean = true
  insert: boolean = true
  person: any = {
    name: '',
    email: '',
    phone: '',
    gender: null,
    birthday: ''
  }

  link_id = ''

  constructor(
    public provider: ProviderService
  ) { }

  ngOnInit() {
    this.loadData()
  }
  loadData() {
    this.provider.get()
      .subscribe((r) => {
        this.items = Object(r)._embedded.contacts
        this.loading = false;
        console.log(this.items, 'dfd')
      }, error => {
        console.log(error)
      })
  }

  clearFields() {
    this.person = {
      name: '',
      email: '',
      phone: '',
      gender: null,
      birthday: ''
    }
    this.link_id = ''
    this.insert = false;
  }

  save() {
    if(this.insert) {
      this.provider.post(this.person)
      .subscribe(res => {
        this.loadData()
      })
    }else {
      this.provider.put(this.link_id, this.person)
      .subscribe(res => {
        this.loadData()
      })
    }
    this.clearFields()
  }

  edit(item) {
    this.insert = false;
    this.link_id = item._links.contact.href.split('/').reverse()[0]
    this.person = item
  }

  delete(item) {
    const id = item._links.contact.href.split('/').reverse()[0]
    this.provider.delete(id)
      .subscribe(res => {
        this.loadData()
      })
  }

}
