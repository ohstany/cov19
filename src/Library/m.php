<?php

function originToArray()
{
   $js = file_get_contents("./countries-origin.json");
   $js = json_decode($js);
   $n = [];

   foreach ($js as $key => $value) {
      $temp = (object) [
         'country_code' => $value->country_code,
         'lat' => $value->latlng[0],
         'lng' => $value->latlng[1],
         'name' => $value->name
      ];
      $n[] = $temp;
   }

   echo "<pre>";

   print_r($n);

   echo "</pre>";

   file_put_contents("./countries-array.json", json_encode($n));
}

function originToObject()
{
   $js = file_get_contents("./countries-origin.json");
   $js = json_decode($js);
   $n = [];

   foreach ($js as $key => $value) {
      $n[$value->country_code] = (object) [
         'lat' => $value->latlng[0],
         'lng' => $value->latlng[1],
         'name' => $value->name,
         'capital' => $value->capital
      ];
   }

   $n = (object) $n;

   echo "<pre>";

   print_r($n);

   echo "</pre>";

   file_put_contents("./countries-object.json", json_encode($n));
}

function iso3166_2_toObject_build()
{
   $js = file_get_contents("./iso-3166-2v2.json");
   $latlng = file_get_contents("./iso-3166-2v1.json");
   $js = json_decode($js);
   $latlng = json_decode($latlng);
   $n = [];

   foreach ($js as $key => $value) {
      $r = [];
      $rr = [];

      foreach ($value->divisions as $kk => $vv) {
         $k = (explode("-", $kk))[1];
         $via = $key . "-" . $k;
         $sec = $latlng->$via;
         $rr[$k] = [
            "utf8" => $vv,
            "fullname" => $sec->name
         ];
         unset($sec->name);
         $rr[$k] = array_merge((array) $rr[$k], (array) $sec);
      }

      $r['name'] = $value->name;
      $r['regions'] = (object) $rr;

      $n[$key] = (object) $r;
   }

   $n = (object) $n;

   echo "<pre>";

   print_r($n);

   echo "</pre>";

   file_put_contents("./iso-3166-2-object.json", json_encode($n));
}

function iso3166_2_normalize()
{
   $n = file_get_contents("./iso-3166-2v1.json");
   $n = json_decode($n);
   $new = [];

   foreach ($n as $key => $value) {
      $kkk = $key;
      if (strpos($value->code, " ") !== false) {
         $c = explode(" ", $value->code);
         $value->code = implode("-", $c);
      }

      if (strpos($value->parent, " ") !== false) {
         $c = explode(" ", $value->parent);
         $value->parent = implode("-", $c);
      }

      if (strpos($key, " ") !== false) {
         $p = explode(" ", $key);
         $value->code = implode("-", $p);
         $kkk = $value->code;
         // echo "WHITE $key <br />";
      }

      $new[$kkk] = $value;
   }

   $new = (object) $new;

   echo "<pre>";

   print_r($new);

   echo "</pre>";

   file_put_contents("./iso_3166_2-normalized.json", json_encode($new));
}

function iso3166_2_toObject_build_reverse()
{
   $js = file_get_contents("./iso-3166-2v2.json");
   $latlng = file_get_contents("./iso_3166_2-normalized.json");
   $js = json_decode($js);
   $latlng = json_decode($latlng);
   $n = [];

   foreach ($latlng as $key => $value) {
      $k = explode("-", $value->code);

      if (sizeof($k) == 1) {
         $b = (object) [
            'code' => $value->code,
            'name' => $value->name,
            'division' => $value->division,
            'parent' => $value->parent
         ];

         if ($value->division != 'continent' && $value->division != 'planet') {
            $b->regions = (object) [];
         }

         $n[$k[0]] = $b;
      }
   }

   foreach ($latlng as $key => $value) {
      $k = explode("-", $value->code);

      if (sizeof($k) == 2) {
         $pp = explode("-", $value->parent);
         $parent = $k[0];
         $child = $k[1];

         if ($pp[0] != $parent) {
            // echo "PARENT $pp[0] - $parent <br />";
            // echo "<pre>";
            // print_r($value);
            // echo "</pre>";
         } else {
            if (!empty($n[$parent])) {
               $fr = $parent . "-" . $child;
               $value->utf8 = $js->$parent->divisions->$fr ? $js->$parent->divisions->$fr : $value->name;
               $n[$parent]->regions->$child = (object) $value;
            } else {
               echo "notexist $parent - $child <br />";
               $n[$parent] = (object) [
                  'code' => $value->code,
                  'name' => $value->name,
                  'division' => $value->division,
                  'parent' => $value->parent,
                  'regions' => (object) []
               ];
            }
         }
      }
   }

   $n = (object) $n;

   echo "<pre>";

   print_r($n);

   echo "</pre>";

   file_put_contents("./iso-3166-2-object.json", json_encode($n));
}

function iso3166_2_latlng_title()
{
   $js = json_decode(file_get_contents("./iso-3166-2-object4.json"));
   $copy = $js;
   $y = 0;
   $n = 0;
   $allow = false;

   foreach ($js as $c => $cv) {
      if ($cv->regions) {
         foreach ($cv->regions as $rk => $rv) {
            // if ((empty($rv->lat) || empty($rv->lng))) {
            if ((empty($rv->lat1) || empty($rv->lng1))) {
               $cn = $cv->name;
               $n++;

               // echo "PARENT $cn<br />";
               // echo "<pre>";
               // print_r($rv);
               // echo "</pre>";

               // try {

               //    $gg = json_decode(file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address=' . rawurlencode($cn . "," . $rv->name) . '&key=AIzaSyA4zKpi3hRchkPewoFrU0h_V4a2ykGrohk'));

               //    $ccc = $gg->results[0]->address_components[0]->long_name;

               //    if ($ccc) {
               //       $rv->name = $ccc;
               //       $rv->got = true;
               //       echo "PARENT $cn, $rv->name === $ccc<br />";
               //    }

               //    echo "<pre>";
               //    print_r($gg);
               //    echo "</pre>";

               //    if (!empty($gg->results[0]->geometry->location)) {
               //       $rv->lat1 = $gg->results[0]->geometry->location->lat;
               //       $rv->lng1 = $gg->results[0]->geometry->location->lng;
               //    }

               //    // echo "<pre>";
               //    // print_r($rv);
               //    // echo "</pre>";

               //    // $rv->lat = 'cooooool';
               //    // $rv->lng = 'cooooool';
               //    $cv->regions->$rk = $rv;
               //    // exit;
               //    // }
               //    $allow = true;
               // } catch (\Throwable $th) {
               //    //throw $th;
               //    echo "smtg wrong $th";
               //    print_r($th);
               // }
            } else {
               $y++;
               $allow = false;
            }
         }
         $copy->$c->regions = $cv->regions;

         // if ($allow) {
         //    file_put_contents("./iso-3166-2-object4.json", json_encode($copy));
         //    echo "IN~~~~~<br />";
         // }
      }
   }

   echo "ADDED: $y | NOT: $n";

   echo "<pre>";

   print_r($copy);

   echo "</pre>";
}

function fmn($n)
{
   $precision = 1;
   return substr(number_format($n, $precision + 1, '.', ''), 0, -1);
}

function iso3166_2_finalize()
{
   $js = json_decode(file_get_contents("./iso-3166-2-object.json"));
   $o = json_decode(file_get_contents("./countries-object.json"));
   $copy = $js;
   $y = 0;
   $n = 0;

   foreach ($js as $c => $cv) {
      if ($cv->regions) {
         if (!empty($o->$c)) {
            $n = $o->$c->name;
            // echo "NOT $c - $n <br />";

            $cv = (object) array_merge((array) $o->$c, (array) $cv);

            foreach ($cv->regions as $k => $v) {
               if (strpos("" . $v->name, "" . $cv->capital) !== false) {
                  $cv->capital = $k;
                  break;
               }
            }

            // echo "<pre>";
            // print_r($cv);
            // echo "</pre>";
         }
         // foreach ($cv->regions as $rk => $rv) {
         //    if ((!empty($rv->lat1) && !empty($rv->lng1))) {
         //       $y++;

         //       $rv->lat = $rv->lat1;
         //       $rv->lng = $rv->lng1;

         //       unset($rv->lat1);
         //       unset($rv->lng1);
         //       unset($rv->got);
         //    } else {
         //       $n++;
         //    }
         // }
         $copy->$c = $cv;
      }
   }

   file_put_contents("./iso-3166-2-object1.json", json_encode($copy));

   echo "<pre>";
   print_r($copy);
   echo "</pre>";
}

function iso3166_2_minify()
{
   $js = json_decode(file_get_contents("./iso-3166-2-object.json"));
   $copy = $js;

   foreach ($js as $c => $cv) {
      if ($cv->regions) {
         unset($cv->parent);
         // unset($cv->code);
         unset($cv->division);
         foreach ($cv->regions as $k => $v) {
            unset($cv->regions->$k->utf8);
            unset($cv->regions->$k->parent);
            unset($cv->regions->$k->division);
         }
         $copy->$c = $cv;
      }
   }

   file_put_contents("./iso-3166-2-object.m.json", json_encode($copy));

   echo "<pre>";
   print_r($copy);
   echo "</pre>";
}

function build_phones()
{
   $js = json_decode(file_get_contents("./phoned.json"));
   $copy = [];

   foreach ($js as $key => $value) {
      $code = $value->code;
      unset($value->code);
      $copy[$code] = (object) [
         'country' => $value->name,
         'num' => $value->dial_code
      ];
   }

   $copy = (object) $copy;

   file_put_contents("./phone.m.json", json_encode($copy));

   echo "<pre>";
   print_r($copy);
   echo "</pre>";
}

function buildNewCountries()
{
   $js = json_decode(file_get_contents("./iso-3166-2-object.json"));
   $copy = [];

   foreach ($js as $key => $value) {
      $copy[] = [
         'country_code' => $key,
         'lat' => $value->lat,
         'lng' => $value->lng,
         'name' => $value->name
      ];
   }

   file_put_contents("./countries-array.json", json_encode($copy));

   echo "<pre>";
   print_r($copy);
   echo "</pre>";
}

// originToArray();
// originToObject();
// iso3166_2_toObject_build();
// iso3166_2_normalize();
// iso3166_2_toObject_build_reverse();
// iso3166_2_latlng_title();
// iso3166_2_finalize();
// iso3166_2_minify();
// build_phones();
buildNewCountries();
