class CreateInfos < ActiveRecord::Migration[5.0]
  def change
    create_table :infos do |t|
      t.string :title
      t.string :summary
      t.integer :infotype
      t.string :user
      t.text :content

      t.timestamps
    end
  end
end
