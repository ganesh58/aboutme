QUnit.test( "TestArea", function( assert ) 
{
            var res = area(2,3);
            assert.equal( res, "6", "Area of rectangle with these inputs will be 6" );
});
         
         
QUnit.test( "TestArea", function( assert ) 
{
            var result = area(6,6);
            assert.equal( result, "36", "Area of rectangle with these inputs will be 36" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(4,3);
            assert.equal( res, "12", "Area of rectangle with these inputs will be 12" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(2,2);
            assert.equal( res, "4", "Area of rectangle with these inputs will be 4" );
});

QUnit.test( "TestArea", function( assert ) 
{
            var res = area(3,6);
            assert.equal( res, "18", "Area of rectangle with these inputs will be 18" );
});