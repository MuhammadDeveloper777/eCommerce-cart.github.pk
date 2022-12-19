
let products=[];

function addToCart(pName, pQty, pPrice)
{	
	flag=0;
	for (i=0;i<products.length;i++) 
	{
			if (pName==products[i][0]) 
		{
			products[i][1]++;
			flag=1;
			
		}
	}	
	
	if(flag==0)
	{	
		products.push([pName, pQty, pPrice]);
	}
	displayProduct();
}
function displayProduct() 
{
	let productTable=`
		<table border="1" align="center">
			<tr>
				<td>Sr#</td>
				<td>Item</td>
				<td>Qty</td>
				<td>Price</td>
				<td>Total</td>
				<td>Increment</td>
				<td>Decrement</td>
			</tr>

	`;	
		let total=0,gandtotal=0;
	for (i=0; i<products.length; i++) 
	{	
		total=products[i][1]*products[i][2];
		productTable=productTable+`
			<tr>
				<td>${i+1}</td>
				<td>${products[i][0]}</td>
				<td>${products[i][1]}</td>
				<td>${products[i][2]}</td>
				<td>${total}</td>
				<td>
					<button onclick="increment(${i})">+</button>
				</td>
				<td>
					<button onclick="decrement(${i})">-</button>
				</td>
			</tr>

		`;
		gandtotal=gandtotal+total;
		total=0;
	}
		
	
	addItem.innerHTML=productTable;
	total.innerHTML=gandtotal;
}
function increment(index)
{
	products[index][1]++;
	displayProduct();
}
function decrement(index) 
{
	products[index][1]--;
	displayProduct();
}


 