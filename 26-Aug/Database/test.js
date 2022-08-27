// function test(name,city){

// console.log(`insert into JsServer values('${name}','${city}')`)
// }
// test('ama','vs')


console.log(`create or alter procedure sp_ImageInfoFromRollerId(@RollerId  nvarchar(20))
as
    begin
        declare @checkId int
        set @checkId = ISNUMERIC(@RollerId)
        if(@checkId = 1)
        begin
            select r.RecommendedBrushRollerId, i.ProductImageId,i.name,i.dimension,i.content from RollerInfo r
            join ImageInfo as i on
            r.ProductImageId = i.ProductImageId
            where r.RecommendedBrushRollerId = @RollerId
            order by r.RecommendedBrushRollerId ,i.name
        end
        else
            raiserror('Invalid! Id Please enter contaning only numeric values ',16,1)
    end`)
