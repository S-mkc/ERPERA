import frappe 
from frappe.utils import today

def on_update(doc, method):
    purchase_approver = frappe.db.get_value("Employee", {"user_id":doc.owner}, "custom_approver_id")
    if purchase_approver == '' or purchase_approver == None:
        frappe.throw("Please ask Administrator to set Purchase Approver For you")

@frappe.whitelist()
def add_approver(owner):
    purchase_approver = frappe.db.get_value("Employee", {"user_id":owner}, "custom_approver_id")
    if purchase_approver != '' or purchase_approver != None:
        return purchase_approver
