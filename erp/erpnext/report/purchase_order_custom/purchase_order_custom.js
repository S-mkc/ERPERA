// Copyright (c) 2024, Mukesh and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Purchase Order Custom"] = {
	"filters": [
		{
			fieldname: "company",
			label: __('Company'),
			fieldtype: 'Link',
			options: 'Company',
			reqd: 1
			// default: frappe.defaults.get_user_defalut('company')
		},
		{
			fieldname: 'From Date',
			label: __('from date'),
			fieldtype: 'Date'
		},
		{
			fieldname: 'To Date',
			label: __('to date'),
			fieldtype: 'date'
		},
		{
			fieldname: "Supplier",
			label: __("Supplier"),
			fieldtype: 'Link',
			options: 'Supplier'

		}
	]
};
