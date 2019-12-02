<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSchoolClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('schoolclasses', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name', 8);
            $table->integer('resturant_id');
            $table->boolean('valid')->default(1);
        });
        $resturants = [
            'TE4',
            'TE16',
        ];
        foreach($resturants as $val) {
            DB::table('schoolclasses')->insert([
                'name' => $val,
                'resturant_id' => '1'
                ]
            );
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('schoolclasses');
    }
}
